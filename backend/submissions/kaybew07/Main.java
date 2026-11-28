import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws IOException {
        String portValue = System.getenv("PORT");
        int port = (portValue == null || portValue.isBlank())
            ?8080
            : Integer.parseInt(portValue);
        
        String clubSecretKey = System.getenv("CLUB_SECRET_KEY");
        if (clubSecretKey == null || clubSecretKey.isBlank())
            throw new IllegalStateException(
                "Missing required environment variable: CLUB_SECRET_KEY");

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        server.createContext("/", exchange -> {
            String json = """
            {
                "name": "Kayson Asefuah",
                "knustindex": "3129525",
                "year": 2,
                "status": "ACC Backend Ready"
            }
            """;
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.getBytes(StandardCharsets.UTF_8).length);

            try (OutputStream output = exchange.getResponseBody()) {
                output.write(json.getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/register", exchange -> {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"Use POST for registration\"}");
                return;
            }
        
        String body;
        try (var input = exchange.getRequestBody()){
            body = new String(input.readAllBytes(), StandardCharsets.UTF_8);
        }

        Map<String, String> fields = parseForm(body);
        String name = fields.getOrDefault("name", "").trim();
        String email = fields.getOrDefault("email", "").trim();

        List<String> errors = new ArrayList<>();
        if (name.isBlank()) {
            errors.add("name is required");
        }
        if (email.isBlank()) {
            errors.add("email is required");
        }

        if (!errors.isEmpty()) {
            String errorJson = "{\"errors\":[\"" + String.join("\",\"", errors) + "\"]}";
            sendJson(exchange, 400, errorJson);
            return;
        }

        sendJson(exchange, 200, "{\"message\":\"Registration data is valid\"}");
    });

        server.start();
        System.out.println("Server running at http://localhost:"+ port +"/");
    }

    private static Map<String, String> parseForm(String body) {
        Map<String, String> fields = new HashMap<>();

        for (String pair : body.split("&")) {
            String[] parts = pair.split("=", 2);
            String key = URLDecoder.decode(parts[0], StandardCharsets.UTF_8);
            String value = parts.length == 2
                ? URLDecoder.decode(parts[1], StandardCharsets.UTF_8)
                : "";
            fields.put(key, value);
        }
        
        return fields;
    }

    private static void sendJson(
        com.sun.net.httpserver.HttpExchange exchange,
        int status,
        String json
    ) throws IOException {
        byte[] response = json.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(status, response.length);

        try (OutputStream output = exchange.getResponseBody()) {
            output.write(response);
        }
    }
}
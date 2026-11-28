import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) throws Exception {
        String portEnv = System.getenv("PORT");
        int port = (portEnv != null && !portEnv.isBlank()) ? Integer.parseInt(portEnv.trim()) : 8080;

        String secretKey = System.getenv("CLUB_SECRET_KEY");
        boolean secretConfigured = (secretKey != null && !secretKey.isBlank());

        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);

        server.createContext("/", exchange -> {
            String json = "{\"name\": \"Chris Edudzi Adabla\", \"year\": \"Year 2\", \"status\": \"ACC Backend Ready\", \"port\": " + port + ", \"secretConfigured\": " + secretConfigured + "}";
            byte[] res = json.getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, res.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(res);
            }
        });

        server.createContext("/register", exchange -> {
            int status = 400;
            String json = "{\"error\": \"Name and email are required\"}";

            if ("POST".equals(exchange.getRequestMethod())) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                boolean validName = body.matches("(?s).*\"name\"\\s*:\\s*\"\\s*[^\"\\s].*");
                boolean validEmail = body.matches("(?s).*\"email\"\\s*:\\s*\"\\s*[^\"\\s].*");

                if (validName && validEmail) {
                    status = 200;
                    json = "{\"message\": \"Registration successful\"}";
                }
            }

            byte[] res = json.getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(status, res.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(res);
            }
        });

        server.start();
        System.out.println("Server running on http://localhost:" + port);
    }
}
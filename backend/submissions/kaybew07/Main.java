import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

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

        server.start();
        System.out.println("Server running at http://localhost:8080/");
    }
}
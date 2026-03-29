import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import jakarta.servlet.*;
import java.io.*;
import java.util.*;
import com.google.gson.*;

@WebServlet("/tasks")
public class TaskServlet extends HttpServlet {
    private static class Task { String id, text, priority; boolean completed; }
    private List<Task> tasks = Collections.synchronizedList(new ArrayList<>());
    private Gson gson = new Gson();

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.getWriter().print(gson.toJson(tasks));
    }

    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String body = new BufferedReader(new InputStreamReader(req.getInputStream())).lines().collect(Collectors.joining());
        Task[] updated = gson.fromJson(body, Task[].class);
        tasks.clear(); tasks.addAll(Arrays.asList(updated));
        resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
}

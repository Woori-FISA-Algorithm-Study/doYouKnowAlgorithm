import java.io.*;
import java.util.*;

public class Main {

    static int F, S, G, U, D;
    static int[] visited;

    static void bfs(int start) {
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        visited[start] = 0;

        while (!q.isEmpty()) {
            int now = q.poll();
            int next = 0;
            for (int i=0; i<2; i++) {
                if (i == 0) {
                    next = now + U;
                } else {
                    next = now - D;
                }
                if (next > 0 && next <= F && visited[next] == -1) {
                    q.add(next);
                    visited[next] = visited[now] + 1;
                }

            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] inputs = br.readLine().split(" ");
        F = Integer.parseInt(inputs[0]);
        S = Integer.parseInt(inputs[1]);
        G = Integer.parseInt(inputs[2]);
        U = Integer.parseInt(inputs[3]);
        D = Integer.parseInt(inputs[4]);

        visited = new int[1000001];
        Arrays.fill(visited, -1);

        bfs(S);

        if (visited[G] == -1) {
            System.out.println("use the stairs");
        } else {
            System.out.println(visited[G]);
        }
    } // main
}

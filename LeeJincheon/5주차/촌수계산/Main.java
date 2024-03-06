import java.io.*;
import java.util.*;

public class Main {

    static List<Integer>[] graph;
    static int[] visited;

    static void bfs(int start) {
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        visited[start] = 0;

        while (!q.isEmpty()) {
            int now = q.poll();
            for (int e : graph[now]) {
                if (visited[e] == -1) {
                    visited[e] = visited[now] + 1;
                    q.add(e);
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        int node1 = Integer.parseInt(st.nextToken());
        int node2 = Integer.parseInt(st.nextToken());

        int m = Integer.parseInt(br.readLine());
        graph = new ArrayList[n+1];
        visited = new int[n+1];
        
        Arrays.fill(visited, -1);

        for (int i=0; i<=n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int i=0; i<m; i++) {
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            graph[x].add(y);
            graph[y].add(x);
        }

        bfs(node1);

        if (visited[node1] == -1 || visited[node2] == -1) {
            System.out.println(-1);
        } else {
            System.out.println(visited[node1] + visited[node2]);
        }
    } // main
}

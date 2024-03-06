import java.io.*;
import java.util.*;

public class Main {

    static int n, k;
    static final int MAX = 100_000;
    static int[] visited = new int[MAX+1]; // 방문 여부 및 해당 위치까지 걸리는 시간

    static void bfs(int x) {
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        visited[x] = 0;

        while (!q.isEmpty()) {
            int now = q.poll();

            if (now == k) { // 동생과 만나면 bfs 종료
                return;
            }

            for (int i=0; i<3; i++) {
                int next;
                switch (i) {
                    case 0: // x2 이동하는 경우
                        next = now * 2;
                        if (next > 0 && next <= MAX && visited[next] == -1) {
                            q.add(next);
                            visited[next] = visited[now]; // 순간이동은 시간에 변화 없음
                        }
                        break;
                    case 1: // -1 이동하는 경우
                        next = now - 1;
                        if (next > 0 && next <= MAX && visited[next] == -1) {
                            q.add(next);
                            visited[next] = visited[now] + 1; // +1초
                        }
                        break;
                    default: // +1 이동하는 경우
                        next = now + 1;
                        if (next > 0 && next <= MAX && visited[next] == -1) {
                            q.add(next);
                            visited[next] = visited[now] + 1; // +1초
                        }
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken()); // 내 위치
        k = Integer.parseInt(st.nextToken()); // 동생 위치
        
        Arrays.fill(visited, -1);

        if (n >= k) {
            // 내가 동생보다 앞에 있거나 같은 경우는 -1로 이동하는 경우만 있음
            System.out.println(n-k);
        } else {
            bfs(n);
            System.out.println(visited[k]);
        }
    } // main

}
import java.io.*;
import java.util.*;

public class Main {

    static int n, m;
    static int[][] map;
    static boolean[][] visited;
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {-1, 0, 1, 0};

    static void bfs(int x, int y) {
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        q.add(y);
        visited[y][x] = true;

        while(!q.isEmpty()) {
            int nowX = q.poll();
            int nowY = q.poll();
            for (int i=0; i<4; i++) {
                int newX = nowX + dx[i];
                int newY = nowY + dy[i];
                if (newX >= 0 && newX < m && newY >= 0 && newY < n && map[newY][newX] == 1 && !visited[newY][newX]) {
                    q.add(newX);
                    q.add(newY);
                    visited[newY][newX] = true;
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int t = Integer.parseInt(br.readLine());

        for (int i=0; i<t; i++) {
            st = new StringTokenizer(br.readLine());
            m = Integer.parseInt(st.nextToken());
            n = Integer.parseInt(st.nextToken());
            int k = Integer.parseInt(st.nextToken());

            map = new int[n][m];
            visited = new boolean[n][m];

            for (int j=0; j<k; j++) {
                st = new StringTokenizer(br.readLine());
                int x = Integer.parseInt(st.nextToken());
                int y = Integer.parseInt(st.nextToken());
                map[y][x] = 1;
            }

            int cnt = 0;
            for (int p=0; p<n; p++) {
                for (int q=0; q<m; q++) {
                    if (map[p][q] == 1 && !visited[p][q]) {
                        bfs(q, p);
                        cnt++;
                    }
                }
            }

            System.out.println(cnt);
        }
    } // main

}
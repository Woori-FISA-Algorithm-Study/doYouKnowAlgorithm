import java.io.*;
import java.util.*;

public class Main {

    static int n;
    static String[] map;
    static boolean[][] visited;
    static List<Integer> houseCount = new ArrayList<>();
    static int complexCount = 0;
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {-1, 0, 1, 0};

    static void bfs(int x, int y) {
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        q.add(y);
        visited[y][x] = true;
        int cnt = 1;

        while(!q.isEmpty()) {
            int nowX = q.poll();
            int nowY = q.poll();
            for (int i=0; i<4; i++) {
                int newX = nowX + dx[i];
                int newY = nowY + dy[i];
                if (newX >= 0 && newX < n && newY >= 0 && newY < n && map[newY].charAt(newX) == '1' && !visited[newY][newX]) {
                    q.add(newX);
                    q.add(newY);
                    visited[newY][newX] = true;
                    cnt++;
                }
            }
        }
        houseCount.add(cnt);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());

        map = new String[n];
        visited = new boolean[n][n];

        for (int i=0; i<n; i++) {
            map[i] = br.readLine();
        }

        for (int i=0; i<n; i++) {
            for (int j=0; j<n; j++) {
                if (map[i].charAt(j) == '1' && !visited[i][j]) {
                    bfs(j, i);
                    complexCount++;
                }
            }
        }

        System.out.println(complexCount);
        houseCount.stream().sorted().forEach(System.out::println);
    } // main

}
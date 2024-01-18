import java.io.*;
import java.util.*;

public class Main {

    static int n;
    static String[] map;
    static boolean[][] visited1, visited2;
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {-1, 0, 1, 0};

    static void bfs1(int x, int y) {
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        q.add(y);
        visited1[y][x] = true;

        while (!q.isEmpty()) {
            int nowX = q.poll();
            int nowY = q.poll();
            for (int i=0; i<4; i++) {
                int newX = nowX + dx[i];
                int newY = nowY + dy[i];
                if (newX >= 0 && newX < n && newY >= 0 && newY < n && !visited1[newY][newX]) {
                    if (map[newY].charAt(newX) == map[nowY].charAt(nowX)) {
                        q.add(newX);
                        q.add(newY);
                        visited1[newY][newX] = true;
                    }
                }
            }
        }
    }

    static void bfs2(int x, int y) {
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        q.add(y);
        visited2[y][x] = true;

        while (!q.isEmpty()) {
            int nowX = q.poll();
            int nowY = q.poll();
            for (int i=0; i<4; i++) {
                int newX = nowX + dx[i];
                int newY = nowY + dy[i];
                if (newX >= 0 && newX < n && newY >= 0 && newY < n && !visited2[newY][newX]) {
                    if(map[nowY].charAt(nowX)=='R' || map[nowY].charAt(nowX)=='G') {
                        if(map[newY].charAt(newX)=='R' || map[newY].charAt(newX)=='G') {
                            q.add(newX);
                            q.add(newY);
                            visited2[newY][newX] = true;
                        }
                    }else {
                        if (map[newY].charAt(newX) == map[nowY].charAt(nowX)) {
                            q.add(newX);
                            q.add(newY);
                            visited2[newY][newX] = true;
                        }
                    }
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());
        map = new String[n];
        visited1 = new boolean[n][n];
        visited2 = new boolean[n][n];

        for (int i=0; i<n; i++) {
            map[i] = br.readLine();
        }

        int area1 = 0;
        int area2 = 0;

        for (int i=0; i<n; i++) {
            for (int j=0; j<n; j++) {
                if (!visited1[i][j]) {
                    bfs1(j, i);
                    area1++;
                }
                if (!visited2[i][j]) {
                    bfs2(j, i);
                    area2++;
                }
            }
        }
        System.out.println(area1 + " " + area2);

    } // main
}

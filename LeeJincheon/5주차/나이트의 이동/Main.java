import java.io.*;
import java.util.*;

public class Main {

    static int size, x, y, tx, ty;
    static int[][] map;
    static int[][] visited;
    static int[] dx = {1, 2, 2, 1, -1, -2, -2, -1};
    static int[] dy = {-2, -1, 1, 2, 2, 1, -1, -2};

    static void bfs() {
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        q.add(y);

        while(!q.isEmpty()) {
            int nowX = q.poll();
            int nowY = q.poll();

            if (nowX == tx && nowY == ty) {
                return;
            }

            for (int i=0; i<dx.length; i++) {
                int newX = nowX + dx[i];
                int newY = nowY + dy[i];
                if (newX >= 0 && newX < size && newY >= 0 && newY < size && visited[newY][newX] == 0) {
                    q.add(newX);
                    q.add(newY);
                    visited[newY][newX] = visited[nowY][nowX] + 1;
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int testCase = Integer.parseInt(br.readLine());

        for (int i=0; i<testCase; i++) {
            size = Integer.parseInt(br.readLine());
            
            map = new int[size][size];
            visited = new int[size][size];
            
            StringTokenizer st = new StringTokenizer(br.readLine());
            x = Integer.parseInt(st.nextToken());
            y = Integer.parseInt(st.nextToken());
            
            st = new StringTokenizer(br.readLine());
            tx = Integer.parseInt(st.nextToken());
            ty = Integer.parseInt(st.nextToken());
            
            bfs();

            System.out.println(visited[ty][tx]);
        }

    } // main

}
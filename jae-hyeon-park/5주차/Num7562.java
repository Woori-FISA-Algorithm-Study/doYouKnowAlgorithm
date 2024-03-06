import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Num7562 {
    static int[][] map;
    static int[][] distance;
    static int[] dx = { 1, 2, 2, 1, -1, -2, -2, -1 };
    static int[] dy = { -2, -1, 1, 2, 2, 1, -1, -2 };
    static int ax, ay, I;

    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int T = Integer.parseInt(bf.readLine());

        for (int i = 0; i < T; i++) {
            I = Integer.parseInt(bf.readLine());
            map = new int[I][I];
            distance = new int[I][I];

            st = new StringTokenizer(bf.readLine());
            int sx = Integer.parseInt(st.nextToken()); // start x
            int sy = Integer.parseInt(st.nextToken());
            st = new StringTokenizer(bf.readLine());
            ax = Integer.parseInt(st.nextToken()); // aim x
            ay = Integer.parseInt(st.nextToken());

            System.out.println(bfs(sx, sy));

        }

    }

    static int bfs(int sx, int sy) {
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(sx);
        q.add(sy);
        distance[sx][sy] = 0;

        while (!q.isEmpty()) {
            int nowx = q.poll();
            int nowy = q.poll();
            if (nowx == ax && nowy == ay) {
                return distance[nowx][nowy];
            }

            for (int i = 0; i < 8; i++) {
                int newx = nowx + dx[i];
                int newy = nowy + dy[i];
                if (newx >= 0 && newy >= 0 && newx < I && newy < I && distance[newx][newy] == 0) {
                    q.add(newx);
                    q.add(newy);
                    distance[newx][newy] = distance[nowx][nowy] + 1;
                }

            }

        }
        return 0;
    }

}

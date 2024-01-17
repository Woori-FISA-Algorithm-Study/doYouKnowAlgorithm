import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Num3184 {
    static int R, C;
    static char[][] map;
    static boolean[][] visited;
    static int[] dx = { 0, 1, 0, -1 };
    static int[] dy = { -1, 0, 1, 0 };
    static int[] wolfandsheep;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(bf.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());

        map = new char[R][C];
        visited = new boolean[R][C];
        wolfandsheep = new int[2];

        for (int i = 0; i < R; i++) {
            String a = bf.readLine();
            for (int j = 0; j < C; j++) {
                map[i][j] = a.charAt(j);
            }
        }

        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                if ((map[i][j] == 'v' || map[i][j] == 'o') && !visited[i][j]) {
                    if (map[i][j] == 'v') {

                        bfs(i, j, 'v');
                    } else {

                        bfs(i, j, 'o');
                    }
                }

            }
        }
        System.out.printf("%d %d", wolfandsheep[1], wolfandsheep[0]); // 양과 늑대 순

    }

    static void bfs(int x, int y, char animal) {
        Queue<Integer> q = new LinkedList<Integer>();
        q.add(x);
        q.add(y);
        visited[x][y] = true;
        int wolf = 0;
        int sheep = 0;
        if (animal == 'v')
            wolf++;
        else if (animal == 'o')
            sheep++;

        while (!q.isEmpty()) {
            int nowx = q.poll();
            int nowy = q.poll();

            for (int i = 0; i < 4; i++) {
                int newx = nowx + dx[i];
                int newy = nowy + dy[i];

                if (map[newx][newy] == '#')
                    continue;
                else if (newx >= 0 && newy >= 0 && newx < R && newy < C && !visited[newx][newy]) {
                    if (map[newx][newy] == 'v') {
                        wolf++;
                    } else if (map[newx][newy] == 'o') {
                        sheep++;
                    }
                    visited[newx][newy] = true;
                    q.add(newx);
                    q.add(newy);

                }
            }
        }
        if (wolf < sheep) {
            wolf = 0;
        } else
            sheep = 0;

        wolfandsheep[0] = wolfandsheep[0] + wolf;
        wolfandsheep[1] = wolfandsheep[1] + sheep;

    }

}


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Num17086 {
	static int N, M;
	static int[][] area;
	static int distance[][];
	static int[] dx = { 0, 1, 1, 1, 0, -1, -1, -1 };
	static int[] dy = { -1, -1, 0, 1, 1, 1, 0, -1 };
	static List<Integer> result;

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());

		area = new int[N][M];

		// int oneNum = 0; //1의 개수

		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(bf.readLine());
			for (int j = 0; j < M; j++) {
				int a = Integer.parseInt(st.nextToken());
				if (a == 1) {
					area[i][j] = a;
					// oneNum++;
				}
			}
		}

		result = new ArrayList<Integer>();

		for (int i = 0; i < N; i++) {

			for (int j = 0; j < M; j++) {

				if (area[i][j] == 1) {

					bfs(i, j);

				}
			}
		}

		Collections.sort(result, Collections.reverseOrder());
		System.out.println(result);

	}

	static void bfs(int x, int y) {
		Queue<Integer> q = new LinkedList<Integer>();
		q.add(x);
		q.add(y);
		distance = new int[N][M]; // 매번 위치가 변경됨

		distance[x][y] = -1; // 여기서부터 보기

		while (!q.isEmpty()) {
			int nowx = q.poll();
			int nowy = q.poll();

			if (area[nowx][nowy] == 1 && distance[nowx][nowy] != -1) {

				result.add(distance[nowx][nowy]);
				return;
			}

			for (int i = 0; i < 8; i++) {
				int newx = nowx + dx[i];
				int newy = nowy + dy[i];

				if (newx >= 0 && newy >= 0 && newx < N && newy < M && distance[newx][newy] == 0) {
					q.add(newx);
					q.add(newy);
					distance[newx][newy] = distance[nowx][nowy] + 1;
				}

			}

		}

	}

}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Num1012 {
	static int M, N, K;
	static int farm[][];
	static int check[][];
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

		int testCase = Integer.parseInt(bf.readLine());
		
		int result;
		
		for(int i=0; i<testCase; i++) {
			result = 0;
			StringTokenizer st =new StringTokenizer(bf.readLine());
			M = Integer.parseInt(st.nextToken());
			N = Integer.parseInt(st.nextToken());
			K = Integer.parseInt(st.nextToken());
			
			farm = new int[N][M];
			check = new int[N][M];
			for(int j=0; j<K; j++) {
				 st =new StringTokenizer(bf.readLine());
				int X = Integer.parseInt(st.nextToken());
				int Y = Integer.parseInt(st.nextToken());
				
				farm[Y][X] = 1;
			}
			
			for(int j=0; j<N; j++) {
				for(int z=0; z<M; z++) {
					if(farm[j][z]==1 &&check[j][z] == 0) {
						bfs(z,j);
						result++;
					}
				}
			}
		System.out.println(result);
		
		}
		

	}
	
	public static void printMap(int[][] farm) {
		for(int i=0;i<N;i++) {
			for(int j=0;j<M;j++) {
				System.out.print(farm[i][j] + " ");
			}
			System.out.println();
		}
	}
	
	static void bfs(int x, int y) {
		Queue<Integer> q = new LinkedList<Integer>();
		q.add(x);
		q.add(y);
		check[y][x] = 1;
		while(!q.isEmpty()) {
			int nowx = q.poll();
			int nowy = q.poll();
			for(int i=0; i<4; i++) {
				
				int newx = nowx + dx[i];
				int newy = nowy + dy[i];
				if(newx>=0 && newy >=0 && newx<M && newy<N && farm[newy][newx] == 1 && check[newy][newx]==0) {
					q.add(newx);
					q.add(newy);
					check[newy][newx] = 1;
				}
			}
		}
	}

}
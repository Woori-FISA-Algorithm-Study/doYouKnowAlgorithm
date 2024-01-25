import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num2468{
	static int[][] map;
	static boolean[][] visited;
	static int N;
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};
	static int count =0;
	static int MaxHeight = 0;
	static int Max=0;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(bf.readLine());
		
		map = new int[N][N];
		
		
		for(int i=0; i<N; i++) {
			String a = bf.readLine();
			String[] b = a.split(" ");
			for(int j=0; j<N; j++) {
				map[i][j] = Integer.parseInt(b[j]);
				MaxHeight = Math.max(MaxHeight, Integer.parseInt(b[j]));
			}	
		}
		
		
		
		for(int a=0; a<=MaxHeight; a++) {
			visited = new boolean[N][N];
			count = 0;
			for(int i=0; i<N; i++) {
				for(int j=0; j<N; j++) {
					if(map[i][j]>a && !visited[i][j]) {
						
						dfs(i, j, a);
						count++;
						
						
					}
				}
			}
			Max = Math.max(Max, count);
		}
		
		System.out.println(Max);
	}
	
	static void dfs(int x, int y, int water) {
		visited[x][y] = true;
		
			
			for(int i=0; i<4;i++) {
				int newx = x + dy[i];
				int newy = y+ dx[i];
				if(newx>=0 && newy>=0 && newx<N && newy<N && map[newx][newy] > water && !visited[newx][newy]) {
					dfs(newx, newy, water);
				}
			}
	}

}

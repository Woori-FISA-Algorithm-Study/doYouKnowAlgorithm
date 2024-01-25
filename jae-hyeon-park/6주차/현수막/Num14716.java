import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num14716 {
	static int M,N;
	static int[] dx = {0, 1, 1, 1, 0, -1, -1, -1};
	static int[] dy = {-1, -1, 0, 1, 1, 1, 0, -1};
	static boolean[][] visited;
	static int[][] arr;
	

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] a= br.readLine().split(" ");
		
		M = Integer.parseInt(a[0]);
		N = Integer.parseInt(a[1]);
		
		arr = new int[M][N];
		visited = new boolean[M][N];
		
		for(int i=0; i<M;i++) {
			String line = br.readLine();
			String[] b= line.split(" ");
			for(int j=0; j<N; j++) {
				arr[i][j] = Integer.parseInt(b[j]);
				
			}
		}
		int count = 0;

		for(int i =0; i<M; i++) {
			for(int j=0; j<N; j++) {
				if(arr[i][j]==1 && !visited[i][j]) { 
					
					dfs(i,j);
					count++;
				}
			}
		}
		
		System.out.println(count);
		
	}
	
	static void dfs(int x, int y) {
		visited[x][y] = true;
		
		for(int i=0; i<8; i++) {
			int newx  = x + dy[i]; //newx가 행이라서 따지고 보니 y좌표
			int newy = y + dx[i];
			
			
			
			if(newx>=0 && newy>=0 && newx<M && newy<N && arr[newx][newy]==1 && !visited[newx][newy]) {
				
				dfs(newx, newy);
			}
			
		}
		
		
	}

}

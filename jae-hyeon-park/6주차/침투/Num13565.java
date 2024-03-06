import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num13565 {
	static int[][] arr;
	static boolean[][] visited;
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};
	static int M,N;
	static String isPossible = "NO";

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] a= br.readLine().split(" ");
		
		M = Integer.parseInt(a[0]);
		N = Integer.parseInt(a[1]);
		
		arr = new int[M][N];
		visited = new boolean[M][N];
		
		
		
		for(int i=0; i<M;i++) {
			String line = br.readLine();
			for(int j=0; j<N; j++) {
				arr[i][j] = Character.getNumericValue(line.charAt(j));
			}
		}
		
		for(int i=0; i<N; i++) {
			if(arr[0][i]==0 && !visited[0][i]) { //전류통하는 시작점인지확인 하고 방문한곳인지 확인
				dfs(0,i);
			}
		}
		
		
		System.out.println(isPossible);

	}
	
	static void dfs(int x, int y) {
		visited[x][y] = true;
		
		if(x == M-1) {
			isPossible = "YES";
			return;
		}
		
		for(int i=0; i<4; i++) {
			int newx  = x + dy[i]; //newx가 행이라서 따지고 보니 y좌표
			int newy = y + dx[i];
			
			
			
			if(newx>=0 && newy>=0 && newx<M && newy<N && arr[newx][newy]==0 && !visited[newx][newy]) {
				
				dfs(newx, newy);
			}
			
		}
		
		
	}

}

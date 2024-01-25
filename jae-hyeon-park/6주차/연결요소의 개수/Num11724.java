import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num11724 {
	static int[][] arr;
	static boolean[] visited;
	static int N;

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		N = Integer.parseInt(st.nextToken()); //점
		int M = Integer.parseInt(st.nextToken()); //간선
		
		arr = new int[N+1][N+1];
		visited = new boolean[N+1];
		
		int result = 0;
		
		for(int i=0; i<M; i++) {
			st = new StringTokenizer(bf.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			
			arr[a][b] = 1;
			arr[b][a] = 1;
			
		}
		
		for(int i=1; i<N+1; i++) {
			if(!visited[i]) {
				dfs(i);
				result++;
			}
		}
		
		System.out.println(result);
		

	}
	
	static void dfs(int num) {
		visited[num] = true;
		
		for(int i=1; i<N+1; i++) {
			if(arr[num][i]==1 && !visited[i]) {
				dfs(i);
			}
			
		}
		
	}

}
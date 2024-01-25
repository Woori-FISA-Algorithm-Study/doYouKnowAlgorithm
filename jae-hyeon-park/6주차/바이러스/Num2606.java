import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;



public class Num2606 {
	static boolean[] visited;
	static int[][] arr;
	static int count = 0;
	static int N;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		int M = Integer.parseInt(br.readLine());
		
		arr = new int[N+1][N+1];
		visited = new boolean[N+1];
		
		for(int i=0; i<M; i++) {
			String[] a= br.readLine().split(" ");
			arr[Integer.parseInt(a[0])][Integer.parseInt(a[1])] = 1;
			arr[Integer.parseInt(a[1])][Integer.parseInt(a[0])] = 1;
		}
		
		
			dfs(1);
			
			System.out.println(count);
		

	}
	
	static void dfs(int node) {
		visited[node] = true;
		
		for(int i=2; i<N+1; i++) {
			if(!visited[i] && arr[node][i] == 1) {
				count++;
				dfs(i);
			}
		}
		
	}

}

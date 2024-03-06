import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Num2644 {
	static boolean[] visited;
	static int N;
	static int arr[][];
	static int[] result ;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(bf.readLine());
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n1 = Integer.parseInt(st.nextToken()); //시작 노드
		int n2 = Integer.parseInt(st.nextToken()); //만나는 노드
		int M = Integer.parseInt(bf.readLine());
		
		arr= new int[N+1][N+1]; //1찍을용
		result = new int[N+1]; //결과용
		
		for(int i=0; i<M; i++) {
			st = new StringTokenizer(bf.readLine());
			int x= Integer.parseInt(st.nextToken());
			int y= Integer.parseInt(st.nextToken());
			arr[x][y] = 1;
			arr[y][x] = 1;
		}
		
		visited = new boolean[N+1]; //숫자 찍었는지 확인용
		
		bfs(n1,n2);
		
		if(result[n2]==0) //연결 없을경우
			System.out.println(-1);
		
		else
		System.out.println(result[n2]);

	}
	
	static void bfs(int n1, int n2) {
		Queue<Integer> q= new LinkedList<Integer>();
		q.add(n1);
		visited[n1] = true;
		
		while(!q.isEmpty()) {
			int node = q.poll();
			if(node == n2)
				break;
			
			for(int i=1; i<N+1; i++) {
				if(arr[node][i] == 1 && !visited[i]) {
					visited[i] = true;
					q.add(i);
					result[i] = result[node]+1; 
					
				}
			}
		}
		
	}

}

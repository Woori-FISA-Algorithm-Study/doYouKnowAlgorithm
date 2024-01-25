import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Num11725 {
	 static boolean[] visited;
	 static int N;
	 //static int[][] arr;
	 static ArrayList<Integer>[] tree;
	 static int[] map;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(br.readLine()); 
		//arr = new int[N+1][N+1]; 이중배열로인한 메모리 초과발생
		tree = new ArrayList[N + 1];
		visited = new boolean [N+1];
		map = new int[N+1]; // 각 노드의 부모노드를 넣은 map (배열로 가능한데 써보고 싶어서 해봄)
		
		for(int i=1; i<N+1; i++) {
			tree[i] = new ArrayList<Integer>(); //각 노드에 연결된 노드확인을 위한 arraylist생성
		}
		
		for(int i=1; i<N; i++) {
			String[] a= br.readLine().split(" ");
			tree[Integer.parseInt(a[0])].add(Integer.parseInt(a[1]));
			tree[Integer.parseInt(a[1])].add(Integer.parseInt(a[0]));
			
			//arr[Integer.parseInt(a[0])][Integer.parseInt(a[1])] = 1;
			//arr[Integer.parseInt(a[1])][Integer.parseInt(a[0])] = 1;
		}
		
		
			
				dfs(1,0); //1이 루트
			
		
		
		for(int i=2; i<N+1; i++) {
			System.out.println(map[i]);
		}
			
	}
	
	static void dfs(int node, int parentNode) {
		map[node] = parentNode; //node의 부모는 parentNode를 나타냄
		
		for(int i : tree[node]) { //i는 node에게서 연결된 것
			if(i != parentNode) { //본인에게서 연결된 부모 노드는 제외하는 작업
				dfs(i,node);
			}
		}
		
	}

}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num6603 {
	static int lotto=6;
	static int k;
	static int[] arr; //결과 들어갈 arr
	static boolean[] visited;
	static int[] info; //정보 들어갈 info
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		while(true) {
			String a = br.readLine();
			if(a.equals("0"))
				break;
			else {
				String b[] = a.split(" ");
				k=Integer.parseInt(b[0]);
				arr = new int[lotto];
				visited = new boolean[k];
				info = new int[k];
				for(int i=0; i<k; i++) {
					info[i] = Integer.parseInt(b[i+1]);
				}
				
				dfs(0, 0);
				System.out.println();
			}
		}
	}
	
	static void dfs(int size, int start) {
		if(size==lotto) {
			for(int a : arr) {
				System.out.print(a + " ");
			}
			System.out.println();
			return;
		}
		
		for(int i=start; i<k; i++) {
			if(!visited[i]) {
				visited[i] = true;
				arr[size] = info[i];
				dfs(size+1, i);
				visited[i] = false;
			}
		}
		
	}

}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedHashSet;

public class Num15663 {

	static int N,M;
	static int[] arr, num;
	static boolean[] visited;
	static  LinkedHashSet<String> linkedHashSet = new LinkedHashSet<>(); //중복제거인 HashSet의 들어온 순서를 보장해주는 리스트가 LinkedHashSet
	

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] a = br.readLine().split(" ");
		
		N = Integer.parseInt(a[0]);
		M = Integer.parseInt(a[1]);
		
		arr = new int[M]; //들어갈 수 모임
		num = new int[N]; // 초기에 주는 수
		visited = new boolean[N];
		
		String[] b = br.readLine().split(" ");
		for(int i=0; i<b.length; i++) {
			num[i]=Integer.parseInt(b[i]);
		}
		Arrays.sort(num); //순서대로 정리
		
		dfs(0);
		
		for(String result: linkedHashSet) {
			System.out.println(result);
		}

	}
	
	static void dfs(int size) { //size는 들어가는 배열 체크하는 거 - 몇개 들어갔는지 확인용
		if(size == M) {
			StringBuilder sb = new StringBuilder(); //결과는 String으로 봐도 상관없어서 사용
			for(int a: arr) {

				sb.append(a + " ");
			}
			linkedHashSet.add(sb.toString());
			return;
		}
		
		for(int i=0;i<N; i++) {
			if(!visited[i]) {
				visited[i] = true;
				arr[size] = num[i];
				dfs(size+1);
				visited[i] = false;
			}
		}
	}


}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Num17086 {
	static int N, M;
	static int[][] area;
	static boolean check[][];
	static int[] dx = {0, 1, 1, 1, 0, -1, -1, -1};
	static int[] dy = {-1, -1, 0, 1, 1, 1, 0, -1};
	static List<Integer> result;

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		N = Integer.parseInt(st.nextToken()); 
		M = Integer.parseInt(st.nextToken()); 
		
		area = new int[N][M];
		
		
		//int oneNum = 0; //1의 개수
		
		for(int i=0; i<N; i++) {
			st = new StringTokenizer(bf.readLine());
			for(int j=0; j<M; j++) {
				int a = Integer.parseInt(st.nextToken());
				if(a == 1) {
					area[i][j] = a;
					//oneNum++;
				}
			}
		}
		
		result = new ArrayList<Integer>();
		
		for(int i=0; i<N; i++) {
			
			for(int j=0; j<M; j++) {
				
				if(area[i][j] == 1) {
					
					bfs(i,j);
					
				}
			}
		}
		
		Collections.sort(result, Collections.reverseOrder());
		System.out.println(result);

	}
	
	static void bfs(int x, int y) {
		Queue<Integer> q = new LinkedList<Integer>();
		q.add(x);
		q.add(y);
		check = new boolean[N][M]; //매번 위치가 변경됨
		
		check[x][y] = true;
		
		while(!q.isEmpty()) {
			int nowx = q.poll();
			int nowy = q.poll();
			for(int num=1; num<N; num++) { //몇번째 반경에 있는지 -> 문제점 발생 : 그냥 뻗기때문에 예제 1의 마지막꺼 1에는 범위에 다른 1이 안걸림, 그렇다고 q에 넣는 방식을 똑같이하면 엄청난 수의 경우가 찍히는걸 보게됨
				for(int i=0; i<8; i++) {
					int newx = nowx + dx[i]*num;
					int newy = nowy + dy[i]*num;
				
					if(newx<0 || newy<0 || newx>=N || newy>=M) {
						continue;
					}
					
					
					if( area[newx][newy] ==1 && !check[newx][newy]) {
						
						result.add(num-1); //해당 지점까지 걸린 발판? 의 개수(안전거리)
						return ;
					}
					
				}
			}
			
			
		}
		
	}

}

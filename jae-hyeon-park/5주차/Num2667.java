import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Num2667 {
	static int N;
	static int[][] map;
	static int[][] visited;
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(bf.readLine());
		
		map = new int[N][N];
		
		String[] arr = new String[N];
		for(int i=0; i<N; i++) {
			arr[i] = bf.readLine();
		}
		
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<N; j++) {
				if(arr[i].charAt(j)=='1') {
					map[i][j] = 1;
				}
				else map[i][j] = 0;
			}
		}
		visited = new int[N][N];
		
		int complex = 0; // 단지수
		List<Integer> house = new ArrayList<Integer>();
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<N; j++) {
				if(map[i][j] == 1 && visited[i][j]==0) {
					house.add(bfs(j,i));
					complex++;
				}
			}
		}
		
		System.out.println(complex);
		Collections.sort(house);
		for(int i=0; i<house.size(); i++) {
			System.out.println(house.get(i));
		}
		
	}
	
	static int bfs(int x, int y) {
		Queue<Integer> q = new LinkedList<Integer>();
		q.add(x);
		q.add(y);
		visited[y][x] = 1;
		int cnt =1;
		while(!q.isEmpty()) {
			int nowX = q.poll();
			int nowY = q.poll();
			for(int i=0; i<4; i++) {
				int changeX = nowX + dx[i];
				int changeY = nowY + dy[i];
				if(changeX>=0 && changeY >=0 && changeX < N && changeY <N && map[changeY][changeX] == 1 && visited[changeY][changeX] == 0) {
					visited[changeY][changeX] = 1;
					q.add(changeX);
					q.add(changeY);
					cnt++;
				}
				
			}
			
		}
		
		return cnt;
		
	}

}

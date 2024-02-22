import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num2578 {
	static int result=0;
	static int count=0;
	static int[][] arr = new int[5][5];
	static boolean[][] visited = new boolean[5][5];
	static boolean flag;
	

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		for(int i=0;i<5;i++) {
			String[] a = br.readLine().split(" ");
			for(int j=0; j<5; j++) {
				arr[i][j] = Integer.parseInt(a[j]);
			}
		}
		
		for(int i=0;i<5;i++) {
			if(flag)
				break;
			String[] a = br.readLine().split(" ");
			
			for(int j=0; j<5; j++) {
				
				result++; //매번 카운트
				check(Integer.parseInt(a[j]));
				if(count>=3) {
					
					flag = true; //완료 된것을 알리는 flag
					break;
				}
			}
		}
		
		System.out.println(result);

	}
	
	static void check(int num) {
		
		for(int i=0;i<5;i++) {
			
			for(int j=0; j<5; j++) {
				if(num == arr[i][j]) {
					visited[i][j] = true;
					
					if(visited[0][j]==true && visited[1][j]==true && visited[2][j]==true && visited[3][j]==true && visited[4][j]==true) 		
						count++; //가로체크
					
						
					if(visited[i][0]==true && visited[i][1]==true && visited[i][2]==true && visited[i][3]==true && visited[i][4]==true)
						count++; //세로체크
					
					if(i==j) { //왼쪽위에서 오른쪽아래 대각선
						if(visited[0][0]==true && visited[1][1]==true && visited[2][2]==true && visited[3][3]==true && visited[4][4]==true)
							count++;
					}
					if(i+j==4) {	//오른쪽위에서 왼쪽 아래 대각선
						if(visited[0][4]==true && visited[1][3]==true && visited[2][2]==true && visited[3][1]==true && visited[4][0]==true)	
							count++;
						
					}
					
					return ;
					
				}
			}
		}
		
	}

}

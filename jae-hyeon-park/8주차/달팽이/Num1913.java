import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num1913 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		int check = Integer.parseInt(br.readLine());
		int Max = N*N;
		String direction; //up, down, left, right
		int[][] arr =new int[N][N];
		int checkx, checky;
		int resultx = 0, resulty=0;
		 StringBuilder stringBuilder = new StringBuilder();
		
		if(N%2==1) {
			direction = "down";
			checkx =0;
			checky =0;
		}
		else {
			direction = "up";
			checkx = N-1;
			checky = N-1;
		}
		
		for(int i=Max; i>0 ;i--) {
			arr[checkx][checky] = i;
			if(direction.equals("down")) {
				if(checkx == N-1 || arr[checkx+1][checky] != 0) {
					direction = "right";
					checky++;
				}
				else
					checkx++;
			}
			else if(direction.equals("right")) {
				if(checky == N-1 || arr[checkx][checky+1] != 0) {
					direction = "up";
					checkx--;
				}
				else
					checky++;
			}
			else if(direction.equals("up")) {
				if(checkx == 0 || arr[checkx-1][checky] != 0) {
					direction = "left";
					checky--;
				}
				else
					checkx--;
			}
			else if(direction.equals("left")) {
				if(checky == 0 || arr[checkx][checky-1] != 0) {
					direction = "down";
					checkx++;
				}
				else
					checky--;
			}
			
		}
		
		for(int i=0; i<N; i++) {
			for(int j=0; j<N; j++) {
				stringBuilder.append(arr[i][j] + " ");
				if(check == arr[i][j]) {
					resultx = i+1;
					resulty = j+1;
				}
			}
			System.out.println(stringBuilder);
			stringBuilder.delete(0, stringBuilder.length());
		}
		System.out.println(resultx + " " + resulty);

	}

}

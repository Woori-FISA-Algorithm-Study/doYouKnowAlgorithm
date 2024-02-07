import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num15886 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		
		// 시작은 무조건 E, 마지막은 W일 예정 - 지도를 벗어나지는 않는다 했음
		// W다음 E인경우 개수가 늘어 날듯보임(끊기는 지점)
		int count = 1; //무조건 1개는 이상
		String[] map = br.readLine().split("");
		String lastChar = "E";
		
		for(int i=1; i<N; i++) {
			if(lastChar.equals("W") && map[i].equals("E")) {
				count++;
			}
			
			lastChar = map[i];
		}
		System.out.println(count);

	}

}

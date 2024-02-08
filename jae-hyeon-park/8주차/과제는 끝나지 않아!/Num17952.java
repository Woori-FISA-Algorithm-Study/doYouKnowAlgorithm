import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Num17952 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		
		
		int takenMinute = 1; //수행한 시간(기준점)
		
		int result = 0;
		Stack<Integer> score = new Stack<Integer>(); //새로운 문제로 인하여 스택에 들어갈 경우 해당 문제 점수
		Stack<Integer> minute = new Stack<Integer>();//새로운 문제로 인하여 스택에 들어갈 경우 해당 문제에 대한 남은 소요시간
		
		for(int i=0; i<N; i++) {
			String[] a = br.readLine().split(" ");
			
			
			if(a[0].equals("1")) {
				int qScore = Integer.parseInt(a[1]);
				int successMinute = Integer.parseInt(a[2]); //과제 소요시간
				
				if(successMinute == takenMinute)
					result = result + qScore;
				else {
					score.push(qScore);
					minute.push(successMinute - takenMinute);
				}
				
			}
			else {
				if(!minute.isEmpty()) {
					int remain = minute.pop();
					if(remain == takenMinute)
						result = result + score.pop();
					else {
						minute.push(remain - takenMinute);
					}
				}
			}
			
		}
		
		System.out.println(result);

	}

}

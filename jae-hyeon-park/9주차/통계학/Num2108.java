import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Num2108 {
	static int N;
	static List<Integer> arr = new ArrayList<>();
	static double avg;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(br.readLine());
		
		int sum = 0;
		
		int[] numsCount = new int[8001]; //-4000~4000값이 각각 몇개있는지를 위한 배열
		int compare = 0; // 비교 했을때 가장 큰 카운트수 (개수)
		List<Integer> bigNum = new ArrayList<>();; //비교할때 개수가 많은 숫자
		
		for(int i=0; i<N; i++) {
			int a = Integer.parseInt(br.readLine());
			sum += a;
			
			numsCount[a+4000] += 1;
			if(numsCount[a+4000] > compare) {
				compare = numsCount[a+4000];
				bigNum.clear(); //비교하는 카운트수가 바뀌기에 비우고 해당 값 다시 넣기
				bigNum.add(a);
			}else if(numsCount[a+4000] == compare) {
				bigNum.add(a);
			}
			
			arr.add(a);
		}
		
		avg = Math.round((double)sum / N);
		System.out.println((int)avg);
		
		Collections.sort(arr);
		System.out.println(arr.get(N/2)); //인덱스가 0부터이므로 +1필요 없음
		
		Collections.sort(bigNum);
		if(bigNum.size()>1) {
			System.out.println(bigNum.get(1));
		}else {
			System.out.println(bigNum.get(0));
		}
		
		System.out.println(arr.get(arr.size()-1) - arr.get(0));
		
	}

}

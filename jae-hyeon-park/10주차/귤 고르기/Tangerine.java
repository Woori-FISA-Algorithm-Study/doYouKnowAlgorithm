import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

public class Tangerine {

	public static void main(String[] args) {
		int k = 6;
		int[] tangerine = {1, 3, 2, 5, 4, 5, 2, 3};
		
		
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		for(int i=0 ;i< tangerine.length; i++) {
			map.put(tangerine[i], map.getOrDefault(tangerine[i], 0) +1); //값을 가지고 오는데 없으면 0으로 설정하고 값을 하나씩 추가
		}
		
		ArrayList<Integer> values = new ArrayList<Integer>(map.values()); //각 크기별 개수를 리스트화
		values.sort(Comparator.reverseOrder()); //내림차순 정렬
		
		int count=0; //고른 귤종류(크기), 최솟값
		int sum =0; //k값과 비교를 위함
		
		for(int value : values) {
			if(sum + value >= k) {
				count++;
				break;
			}
			else {
				sum+=value;
				count++;
			}
		}
		System.out.println(count);

	}

}

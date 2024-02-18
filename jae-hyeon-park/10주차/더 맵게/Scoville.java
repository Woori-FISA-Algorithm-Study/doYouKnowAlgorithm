
import java.util.PriorityQueue;

public class Scoville {

	public static void main(String[] args) {
		int[] scoville = {1, 2, 3, 9, 10, 12};
		int K = 7;

		int count=0;
		
		PriorityQueue<Integer> list = new PriorityQueue<>(); //자동으로 오름차순
		
		for(int i : scoville) {
			list.add(i);
		}
		

		
		while(list.peek()<K && list.size()>1) {
			

			
			int s1 = list.poll();
			int s2 = list.poll();
			
			int newFood = s1 + s2*2;

			list.offer(newFood);
			
			count++;

		}
		
		if(list.peek()<K)
			System.out.println(-1);

		System.out.println(count);

	}

}

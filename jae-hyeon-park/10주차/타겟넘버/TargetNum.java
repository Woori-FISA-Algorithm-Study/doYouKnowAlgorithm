public class TargetNum {
	static int count=0, sum=0;
	static int[] numbers2;
	static int target2;


	public static void main(String[] args) {
		int[] numbers = {1,1,1,1,1};
		int target = 3;
		
		numbers2 = numbers;
		target2 = target;
		
		
		dfs(0, 0);

		System.out.println(count);
		
	}
	
	static void dfs(int index, int sum) {
		
		if(index==numbers2.length) {
			if(sum==target2) {
				count++;
				return;
			}
			else {
				return;
			}
		}
		
		dfs(index+1, sum + numbers2[index]); // 비교하는 것을 넘겨서 하게함
		dfs(index+1, sum -numbers2[index]);
		
		
	}

}

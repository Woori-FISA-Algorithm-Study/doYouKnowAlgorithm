import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Num1138 {
	static int N;
	static List<Integer>  arr = new ArrayList<>();

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(br.readLine());
		
		String[] a = br.readLine().split(" ");
		
		for(int i=N-1; i>=0; i--) {
			arr.add(Integer.parseInt(a[i]), i+1);
		}
		
		StringBuilder sb = new StringBuilder();
		
		for(int i=0; i<arr.size(); i++) {
			sb.append(arr.get(i) + " ");
		}
		
		System.out.println(sb);

	}

}

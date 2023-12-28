import java.io.*;
import java.util.StringTokenizer;

public class Main {

    static int s;
    static int cnt = 0;
    static int[] numbers;

    static void dfs(int idx, int sum) {
        if (idx == numbers.length) {
            if (sum == s) {
                cnt++;
            }
        } else {
            dfs(idx + 1, sum + numbers[idx]);
            dfs(idx + 1, sum);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
      
        int n = Integer.parseInt(st.nextToken());
        s = Integer.parseInt(st.nextToken());

        numbers = new int[n];
        st = new StringTokenizer(br.readLine());
      
        for (int i=0; i<n; i++) {
            numbers[i] = Integer.parseInt(st.nextToken());
        }

        dfs(0, 0);
      
        System.out.println(s == 0 ? cnt - 1 : cnt);
    }
}

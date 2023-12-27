import java.io.*;
import java.util.Scanner;

public class Main {
    static int n;
    static int[] arr;
    static int[] oper = new int[4]; // 각 연산자의 개수가 담길 배열
    static int min = Integer.MAX_VALUE;
    static int max = Integer.MIN_VALUE;

    static void dfs(int level, int sum) {
        // 트리의 끝에 도착하면 최대값, 최소값 갱신 후 종료
        if (level == n) {
            min = Math.min(min, sum);
            max = Math.max(max, sum);
            return;
        }

        for (int i=0; i<4; i++) {
            if (oper[i] != 0) { // 연산자가 있으면
                oper[i]--; // 연산자 사용

                // 연산자 종류별로 dfs 호출
                if (i == 0) { // 더하기
                    dfs(level + 1, sum + arr[level]);
                } else if (i == 1) { // 빼기
                    dfs(level + 1, sum - arr[level]);
                } else if (i == 2) { // 곱하기
                    dfs(level + 1, sum * arr[level]);
                } else { // 나누기(몫)
                    dfs(level + 1, sum / arr[level]);
                }

                oper[i]++; // 다시 연산자 사용 전으로 복귀 (백트래킹)
            }
        }
    }

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        arr = new int[n];

        for (int i=0; i<n; i++) {
            arr[i] = sc.nextInt();
        }

        for (int i=0; i<4; i++) {
            oper[i] = sc.nextInt();
        }

        dfs(1, arr[0]);

        System.out.println(max);
        System.out.println(min);
    }
}

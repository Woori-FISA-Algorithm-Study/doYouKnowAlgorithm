import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 입력 받는 부분
        String[] input = br.readLine().split(" ");
        int n = Integer.parseInt(input[0]);
        int m = Integer.parseInt(input[1]);

        input = br.readLine().split(" ");
        int[] pay = new int[n];
        long[] prefixSum = new long[n]; // 누적합

        for(int i=0; i<n; i++) {
            pay[i] = Integer.parseInt(input[i]);

            if(i == 0) {
                prefixSum[i] = pay[i];
            } else {
                prefixSum[i] = prefixSum[i - 1] + pay[i];
            }
        }

        long max = 0; // 최종 결과
        int idxStart = 0; // 윈도우 시작 인덱스
        int idxEnd = m - 1; // 윈도우 끝 인덱스

        // 슬라이딩 윈도우
        while(idxEnd < n) {
            long tmp = 0; // 현재 윈도우의 합

            if(idxStart == 0) {
                max = prefixSum[idxEnd];
                idxStart++;
                idxEnd++;
            } else {
                tmp = prefixSum[idxEnd] - prefixSum[idxStart - 1];
                max = Math.max(max, tmp);
                idxStart++;
                idxEnd++;
            }
        }

        System.out.println(max);
    }
}

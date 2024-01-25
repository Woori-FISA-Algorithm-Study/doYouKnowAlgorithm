import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num3187 {
	static int R, C;
    static char[][] map;
    static boolean[][] visited;
    static int[] dx = { 0, 1, 0, -1 };
    static int[] dy = { -1, 0, 1, 0 };
    static int[] sheepAndWolf;
    static int wolf=0 , sheep =0;

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(bf.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        
        map = new char[R][C];
        visited = new boolean[R][C];
        sheepAndWolf = new int[2];
        
        for (int i = 0; i < R; i++) {
            String a = bf.readLine();
            for (int j = 0; j < C; j++) {
                map[i][j] = a.charAt(j);
            }
        }
        
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                if ((map[i][j] == 'k' || map[i][j] == 'v') && !visited[i][j]) {
                    if (map[i][j] == 'k') {
                    	wolf=0;
                    	sheep =0;
                        dfs(i, j, 'k');
                        if(sheep>wolf) {
                        	sheepAndWolf[0] += sheep;
                        }
                        else {
                        	sheepAndWolf[1] += wolf;
                        }
                    } else {
                    	wolf=0;
                    	sheep =0;
                        dfs(i, j, 'v');
                        if(sheep>wolf) {
                        	sheepAndWolf[0] += sheep;
                        }
                        else {
                        	sheepAndWolf[1] += wolf;
                        }
                    }
                }

            }
        }
        
        System.out.printf("%d %d", sheepAndWolf[0], sheepAndWolf[1]);

	}
	
	static void dfs(int x, int y, char animal) {
		visited[x][y] = true;
		if(animal == 'k') {
			sheep++;
		}
		else if(animal =='v') {
			wolf++;
		}
		
		for(int i=0; i<4; i++) {
			int newx = x + dy[i];
			int newy = y + dx[i];
			if(map[newx][newy]=='#') {
				continue;
			}
			else if(newx>=0 && newy>=0 && newx < R && newy < C && !visited[newx][newy]) {
				dfs(newx, newy, map[newx][newy]);
			}
		}
		
	}

}

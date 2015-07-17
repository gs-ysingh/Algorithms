#include <iostream>
using namespace std;

int main() {
	int m, n, o;
	while(cin >> m >> n >> o) {		
		if(m == 0 && n == 0 && o == 0) {
			break;
		}
		if(m + o == 2 * n) {
			cout << "AP" << " " << (n - m) + o << "\n";
		} 
		else if(n * n == m * o) {
			cout << "GP" << " " << (n / m) * o << "\n";	
		}
	}
	return 0;
}
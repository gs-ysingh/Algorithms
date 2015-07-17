#include <iostream>
using namespace std;

int main() {
	int t, m, n, i;
	cin >> t; 
	while(t--) {
		cin >> m >> n;
		if(m == n) {
			if(m % 2 == 0) {
				cout << m + n << "\n";
			}
			else {
				cout << m + n - 1 << "\n";
			}	
		}
		else if(n == m - 2) {
			if(m % 2 == 0) {
				cout << m + n << "\n";
			}
			else {
				cout << m + n - 1 << "\n";
			}			
		}
		else {
			cout << "No Number" << "\n";
		}

	}
	return 0;
}
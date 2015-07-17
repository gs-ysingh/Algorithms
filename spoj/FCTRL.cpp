#include <iostream>
using namespace std;

int main() {
	int t, m, s = 0, i;
	cin >> t; 
	while(t--) {
		cin >> m;
		s = 0;
		for(i = m; i > 0; i = i / 5) {
			s += i / 5;
		}
		cout << s << "\n";
	}
	return 0;
}
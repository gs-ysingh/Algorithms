#include <iostream>
#include <cmath>
#include <vector>
#include <set>

using namespace std;

int main() {
	int t, m, n, i;
	int j = 0, s, k;
	bool flag;
	vector<int> primes;
	primes.push_back(2);
	
	for(j = 3; j < 32000; j = j + 2) {
		s = sqrt(j);
		flag = true;
		for(k = 2; k <= s; k++) {
			if(j % k == 0) {
				flag = false;
				break;
			}
		}
		if(flag) {
			primes.push_back(j);
		}
	}

	cin >> t; 
	while(t--) {
		cin >> m >> n;
		vector<int>:: iterator j;
		for(i = m; i <= n; i++) {
			s = sqrt(i);
			flag = true;
			for (j = primes.begin(); j != primes.end() && *j <= s; j++) {
				if(i % *j == 0) {
					flag = false;
					break;
				}
			}
			if(flag && i != 1) {
				cout << i << "\n";
				if(i != 2) {
					i++;	
				}				
			}
		}	

	}
	return 0;
}

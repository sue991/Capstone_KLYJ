#include <stdio.h>


void numFrime(int n){
	int alist[100001] = {0};
	for (int i=2;i<n+1;i++){
		alist[i] = i;
	}

	for (int i=2;i<=n;i++){
		if (alist[i] != 0){
			int j = i+i;
			while(j < n+1){
				alist[j] = 0;
				j += i;
			}
		}
	}

	for (int i=0;i<n+1;i++){
		if (alist[n/2-i] != 0 && alist[n/2+i] != 0){
			printf("%d %d\n",alist[n/2-i],alist[n/2+i]);
			break;
		}
	}



}


int main(){
	int n;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		int num;
		scanf("%d",&num);
		numFrime(num);
	}


}
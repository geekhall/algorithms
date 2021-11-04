#include <stdio.h>

int partition(double arr[], int low, int high){
    double key;
    key = arr[low];
    while(low<high){
        while(low <high && arr[high]>= key )
            high--;
        if(low<high)
            arr[low++] = arr[high];
        while( low<high && arr[low]<=key )
            low++;
        if(low<high)
            arr[high--] = arr[low];
    }
    arr[low] = key;
    return low;
}

void quick_sort(double arr[], int start, int end){
    int pos;
    if (start<end){
        pos = partition(arr, start, end);
        quick_sort(arr,start,pos-1);
        quick_sort(arr,pos+1,end);
    }
    return;
}

double getAdmissionLine(int k, double* scores, int scoresSize){
    double temp = 0.0;
    quick_sort(scores,0, scoresSize-1);
    return scores[scoresSize - k];
}

int main(){
    // double arr[11] = {162.5,321.0,448.0,543.0,499.0,99.0,641.5,442.5,618.5,678.0};
    double arr[4] = {723,699,510,488.5};
    double res = getAdmissionLine(4, arr, 4);
    printf("res = %f.\n", res);
}
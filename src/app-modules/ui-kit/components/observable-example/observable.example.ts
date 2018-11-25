import { Observable, from, Subscription } from "rxjs";
// import  'rxjs/add/Observable/of';
import { filter, map, distinctUntilChanged, retry } from 'rxjs/operators';
export class ObservableExample {
    public process() {

        let obser: Observable<any> = from([1, 2, 3, 4, 5, 5, 55]);

        //    obser.subscribe(data => { console.log("First",data) });
        //    obser.subscribe(data => { console.log("First",data) });
        //    obser.subscribe(data => { console.log("First",data) });

        let errorCount = 0;
        let manual = new Observable(ob => {
            ob.next(1);
            ob.next(3);
            ob.next(4);
            ob.next(6);
            setTimeout(() => { ob.next(7); }, 1000);
            setTimeout(() => { ob.next(7); }, 2000);
            setTimeout(() => { ob.next(9); }, 3000);
            setTimeout(() => { ob.next(10); }, 4000);
            setTimeout(() => { ob.next(11); }, 5000);
            setTimeout(() => {
                if (errorCount < 3) {
                    ++errorCount;
                    ob.error("manual");
                } else {
                    ob.next(20);
                }
            }, 5500);
            setTimeout(() => { ob.next(12); }, 6000);
            setTimeout(() => { ob.complete(); }, 14000);
        });

        let sub1: Subscription = manual.subscribe(
            m => console.log("Manual", m)
            , (err) => { console.warn("Manual", err) },
            () => console.log("Done manual")
        );

        setTimeout(() => {
            sub1.unsubscribe();
        }, 4000);


        manual
            .pipe(retry(1))
            .pipe(filter((m) => m > 4))
            .pipe(distinctUntilChanged())
            .pipe(map((m) => { return { data: m }; }))
            .subscribe(
                (m) => console.log("Manual Two", m),// success
                (err) => { console.warn("Manual Two: ", err) }, // error
                () => console.log("Done manual Two") // complete
                );
    }
}
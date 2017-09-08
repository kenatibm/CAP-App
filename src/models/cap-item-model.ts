import { Observable } from 'rxjs/Observable';

export class IssueModel{
    issue: any;
    issueObserver: any;

    recordType: string = "ISSUE";
    workOrderNo: string = "NOT ASSIGNED";
    title:string;
    assetID:string;
    status: string;
    priority: string;
    severity: string;
    isSaftyRelated: boolean;
    description: string;
    location: any = {};
    images: any = [];
    statusHistory: any = [];
    createdDate: string;
    lastModifiedDate: string;

    constructor(){
        this.issue = Observable.create((observer) => {
            this.issueObserver = observer;
        });
    }

    setTitle(title:string){
        this.title = title;
        this.issue.next(true);
    }

    setAssetID(assetID:string){
        this.assetID = assetID;
        this.issue.next(true);
    }

    setPriority(priority:string){
        this.priority = priority;
        this.issue.next(true);
    }

    setSeverity(severity:string){
        this.severity = severity;
        this.issue.next(true);
    }

    setIsSaftyRelated(isSaftyRelated:boolean){
        this.isSaftyRelated = isSaftyRelated;
        this.issue.next(true);
    }

    setDescription(description:string){
        this.description = description;
        this.issue.next(true);
    }

    setLocation(location:any){
        this.location = location;
        this.issue.next(true);
    }

    setCreatedDate(createdDate:string){
        this.createdDate = createdDate;
        this.issue.next(true);
    }

    setLastModifiedDate(lastModifiedDate:string){
        this.lastModifiedDate = lastModifiedDate;
        this.issue.next(true);
    }

}
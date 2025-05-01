import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { User } from "../../core/models/user.model";
import { UserService } from "../../core/services/user.services";
import { DialogComponent } from "./dialog/dialog.component";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';


@Component ({
    selector:'user-manegment',
    standalone:true,
    imports:[MatTableModule, MatButtonModule,  MatDialogModule],
    templateUrl:'./user-manegment.component.html',
    styleUrl:'./user-manegment.component.css'
})

export class UserManegmentComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions']
    dataSource!:MatTableDataSource<User>


    constructor(
        private userService: UserService,
        public dialog: MatDialog

    ) {}

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.userService.users());
    }

    openDialog(user?: User) {
        const dialogRef = this.dialog.open(DialogComponent, {
            width:'333px',
            data:user || {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                if(user) {
                    this.userService.updateUser(result); //Update User
                } else {
                    this.userService.addUser(result); // Add user
                }
            }
        });
    }

    deleteUser(id:number) {
        if(confirm('Userni Ochirmoqchimisiz?')) {
            this.userService.deleteUser(id);

            setTimeout(() => {
                alert('User o‘chirildi!');
            }, 200);
        }
    }
}


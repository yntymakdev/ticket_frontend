export interface ITicket {
   id:          String      
  title:        String
  description:  String
  customerName: String
  status :     TicketStatus  
  createdById : String
  createdBy  : User         
  comments     Comment[]
  assignments  Assignment[]
}

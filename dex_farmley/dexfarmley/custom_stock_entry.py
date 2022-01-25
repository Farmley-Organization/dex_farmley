import frappe


def before_save(self,method):
     if self.stock_entry_type=="Material Transfer for Manufacture":
        doc=frappe.db.get_doc("Work Order",self.work_order)      
        pidoc=frappe.db.get_doc("Item",doc.production_item)
        for i in doc.required_items:          
            idoc=frappe.db.get_doc("Item",i.item_code)
            if idoc.fg==pidoc.fg :
                frappe.throw("FG To FG Transfer Couldn't Possible")
                                   
                            
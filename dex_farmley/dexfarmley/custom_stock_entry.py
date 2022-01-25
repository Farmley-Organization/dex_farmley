import frappe


def before_save(self,method):
     if self.stock_entry_type=="Material Transfer for Manufacture":
        doc=frappe.get_doc("Work Order",self.work_order)      
        pidoc=frappe.get_doc("Item",doc.production_item)
        for i in doc.required_items:          
            idoc=frappe.get_doc("Item",i.item_code)
            if idoc.fg==pidoc.fg :
                frappe.throw("FG To FG Transfer didn't Possible")
                                   
                            
import frappe



def return_against_sales_invoice(self,method):
    if self.is_return:
        doc=frappe.db.sql("""select parent from `tabSales Invoice Item` where delivery_note='{0}' limit 1""".format(self.return_against),as_dict=1)
        for i in doc:
            self.return_against_sales_invoice=i.parent

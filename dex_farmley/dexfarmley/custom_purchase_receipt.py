


import frappe


@frappe.whitelist()
def make_sales_return(source_name, target_doc=None):
    from erpnext.controllers.sales_and_purchase_return import make_return_doc
    doc=make_return_doc("Delivery Note", source_name, target_doc)
    print("$$$$$$$$$$$$$$$$$$$$$$$$$$$",doc)
    doc.save(ignore_permissions=True)
    doc.submit()
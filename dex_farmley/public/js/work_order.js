frappe.ui.form.on("Work Order", {


refresh:function(frm){
    const show_start_btn = (frm.doc.skip_transfer
        || frm.doc.transfer_material_against == 'Job Card') ? 0 : 1;

    if (show_start_btn) {
        // if ((flt(doc.material_transferred_for_manufacturing) < flt(doc.qty))
        if ((flt(doc.transfered_rm_weight) < flt(doc.planned_rm_weight))
            && frm.doc.status != 'Stopped') {
    var start_btn = frm.add_custom_button(__('Start'), function() {
            erpnext.work_order.make_se(frm, 'Material Transfer for Manufacture');
        });
        start_btn.addClass('btn-primary');

    }
    }
    }


});
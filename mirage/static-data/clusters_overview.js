export default `{
  "not_current_data": false,
  "cluster_list": [{
    "cluster_name": "my",
    "error_list": [],
    "warning_list": [],
    "quorate": false,
    "status": "error",
    "node_list": [{
      "name": "beta",
      "status": "unknown",
      "warning_list": [],
      "error_list": []
    }, {
      "id": "1",
      "error_list": [],
      "warning_list": [],
      "status": "online",
      "quorum": false,
      "uptime": "0 days, 00:02:38",
      "name": "alpha",
      "services": {
        "pacemaker": {
          "installed": true,
          "running": true,
          "enabled": true
        },
        "corosync": {
          "installed": true,
          "running": true,
          "enabled": true
        },
        "pcsd": {
          "installed": true,
          "running": true,
          "enabled": true
        },
        "cman": {
          "installed": false,
          "running": false,
          "enabled": false
        },
        "sbd": {
          "installed": false,
          "running": false,
          "enabled": false
        }
      },
      "corosync": true,
      "pacemaker": true,
      "cman": false,
      "corosync_enabled": true,
      "pacemaker_enabled": true,
      "pcsd_enabled": true,
      "sbd_config": null,
      "status_version": "2"
    }],
    "resource_list": [{
      "id": "jlkjlk",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "stonith:fence_apc_snmp",
      "provider": null,
      "type": "fence_apc_snmp",
      "stonith": true,
      "utilization": [],
      "instance_attr": [{
        "id": "jlkjlk-instance_attributes-ipaddr",
        "name": "ipaddr",
        "value": "1.2.3.4"
      }, {
        "id": "jlkjlk-instance_attributes-port",
        "name": "port",
        "value": "6688"
      }, {
        "id": "jlkjlk-instance_attributes-action",
        "name": "action",
        "value": "abc"
      }],
      "class": "stonith",
      "crm_status": [{
        "id": "jlkjlk",
        "resource_agent": "stonith:fence_apc_snmp",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 20,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 0,
        "exit_reason": null,
        "id": "jlkjlk_last_0",
        "interval": 0,
        "last_rc_change": 1498137755,
        "last_run": 1498137755,
        "on_node": "alpha",
        "op_digest": "2837552e76fda553add1c2dea028897d",
        "operation_key": "jlkjlk_monitor_0",
        "operation": "monitor",
        "op_force_restart": null,
        "op_restart_digest": null,
        "op_status": 0,
        "queue_time": 0,
        "rc_code": 7,
        "transition_key": "5:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;5:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "abc",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "stonith:fence_apc",
      "provider": null,
      "type": "fence_apc",
      "stonith": true,
      "utilization": [],
      "instance_attr": [{
        "id": "abc-instance_attributes-ipaddr",
        "name": "ipaddr",
        "value": "2.2.2.2"
      }, {
        "id": "abc-instance_attributes-login",
        "name": "login",
        "value": "hugo"
      }, {
        "id": "abc-instance_attributes-port",
        "name": "port",
        "value": "hugo"
      }],
      "class": "stonith",
      "crm_status": [{
        "id": "abc",
        "resource_agent": "stonith:fence_apc",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 24,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 0,
        "exit_reason": null,
        "id": "abc_last_0",
        "interval": 0,
        "last_rc_change": 1498137756,
        "last_run": 1498137756,
        "on_node": "alpha",
        "op_digest": "eef4686df8169708b1edb8d55347fc44",
        "operation_key": "abc_monitor_0",
        "operation": "monitor",
        "op_force_restart": null,
        "op_restart_digest": null,
        "op_status": 0,
        "queue_time": 0,
        "rc_code": 7,
        "transition_key": "6:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;6:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "vvvv",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "stonith:fence_apc",
      "provider": null,
      "type": "fence_apc",
      "stonith": true,
      "utilization": [],
      "instance_attr": [{
        "id": "vvvv-instance_attributes-ipaddr",
        "name": "ipaddr",
        "value": "123"
      }, {
        "id": "vvvv-instance_attributes-login",
        "name": "login",
        "value": "12"
      }, {
        "id": "vvvv-instance_attributes-port",
        "name": "port",
        "value": "1"
      }],
      "class": "stonith",
      "crm_status": [{
        "id": "vvvv",
        "resource_agent": "stonith:fence_apc",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 28,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 0,
        "exit_reason": null,
        "id": "vvvv_last_0",
        "interval": 0,
        "last_rc_change": 1498137757,
        "last_run": 1498137757,
        "on_node": "alpha",
        "op_digest": "25b1a857d025d4871208d3db324da752",
        "operation_key": "vvvv_monitor_0",
        "operation": "monitor",
        "op_force_restart": null,
        "op_restart_digest": null,
        "op_status": 0,
        "queue_time": 0,
        "rc_code": 7,
        "transition_key": "7:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;7:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "druha_ip",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "ocf::heartbeat:IPaddr2",
      "provider": "heartbeat",
      "type": "IPaddr2",
      "stonith": false,
      "utilization": [],
      "instance_attr": [{
        "id": "druha_ip-instance_attributes-ip",
        "name": "ip",
        "value": "192.168.56.111"
      }],
      "class": "ocf",
      "crm_status": [{
        "id": "druha_ip",
        "resource_agent": "ocf::heartbeat:IPaddr2",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 37,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 38,
        "exit_reason": null,
        "id": "druha_ip_last_0",
        "interval": 0,
        "last_rc_change": 1498137757,
        "last_run": 1498137757,
        "on_node": "alpha",
        "op_digest": "0031c40fc8cc966df94193573b7e2ed5",
        "operation_key": "druha_ip_monitor_0",
        "operation": "monitor",
        "op_force_restart": null,
        "op_restart_digest": null,
        "op_status": 0,
        "queue_time": 0,
        "rc_code": 7,
        "transition_key": "9:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;9:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "druhy_indian",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "ocf::heartbeat:apache",
      "provider": "heartbeat",
      "type": "apache",
      "stonith": false,
      "utilization": [],
      "instance_attr": [],
      "class": "ocf",
      "crm_status": [{
        "id": "druhy_indian",
        "resource_agent": "ocf::heartbeat:apache",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 41,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 27,
        "exit_reason": null,
        "id": "druhy_indian_last_0",
        "interval": 0,
        "last_rc_change": 1498137757,
        "last_run": 1498137757,
        "on_node": "alpha",
        "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
        "operation_key": "druhy_indian_monitor_0",
        "operation": "monitor",
        "op_force_restart": null,
        "op_restart_digest": null,
        "op_status": 0,
        "queue_time": 0,
        "rc_code": 7,
        "transition_key": "10:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;10:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "dumb2",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "ocf::heartbeat:Dummy",
      "provider": "heartbeat",
      "type": "Dummy",
      "stonith": false,
      "utilization": [],
      "instance_attr": [],
      "class": "ocf",
      "crm_status": [{
        "id": "dumb2",
        "resource_agent": "ocf::heartbeat:Dummy",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 50,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 7,
        "exit_reason": null,
        "id": "dumb2_last_0",
        "interval": 0,
        "last_rc_change": 1498137757,
        "last_run": 1498137757,
        "on_node": "alpha",
        "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
        "operation_key": "dumb2_monitor_0",
        "operation": "monitor",
        "op_force_restart": " state ",
        "op_restart_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
        "op_status": 0,
        "queue_time": 0,
        "rc_code": 7,
        "transition_key": "12:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;12:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "foo",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "agentname": "ocf::heartbeat:Dummy",
      "provider": "heartbeat",
      "type": "Dummy",
      "stonith": false,
      "utilization": [],
      "instance_attr": [],
      "class": "ocf",
      "crm_status": [{
        "id": "foo",
        "resource_agent": "ocf::heartbeat:Dummy",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 54,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 19,
        "exit_reason": null,
        "id": "foo_last_0",
        "interval": 0,
        "last_rc_change": 1498137757,
        "last_run": 1498137757,
        "on_node": "alpha",
        "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
        "operation_key": "foo_monitor_0",
        "operation": "monitor",
        "op_force_restart": " state ",
        "op_restart_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
        "op_status": 0,
        "queue_time": 1,
        "rc_code": 7,
        "transition_key": "13:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;13:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "myrs",
      "error_list": [],
      "warning_list": [],
      "class_type": "primitive",
      "status": "blocked",
      "meta_attr": [{
        "id": "myrs-meta_attributes-ggg",
        "name": "ggg",
        "value": "aaa"
      }],
      "parent_id": null,
      "disabled": false,
      "agentname": "ocf::heartbeat:IPaddr2",
      "provider": "heartbeat",
      "type": "IPaddr2",
      "stonith": false,
      "utilization": [],
      "instance_attr": [{
        "id": "myrs-instance_attributes-ip",
        "name": "ip",
        "value": "192.168.56.202"
      }, {
        "id": "myrs-instance_attributes-cidr_netmask",
        "name": "cidr_netmask",
        "value": "32"
      }],
      "class": "ocf",
      "crm_status": [{
        "id": "myrs",
        "resource_agent": "ocf::heartbeat:IPaddr2",
        "managed": true,
        "failed": false,
        "role": "Stopped",
        "active": false,
        "orphaned": false,
        "failure_ignored": false,
        "nodes_running_on": 0,
        "pending": null,
        "node": null
      }],
      "operations": [{
        "call_id": 58,
        "crm_debug_origin": "do_update_resource",
        "crm_feature_set": "3.0.10",
        "exec_time": 87,
        "exit_reason": null,
        "id": "myrs_last_0",
        "interval": 0,
        "last_rc_change": 1498137757,
        "last_run": 1498137757,
        "on_node": "alpha",
        "op_digest": "d368d1259fe5413c9e285bd513350209",
        "operation_key": "myrs_monitor_0",
        "operation": "monitor",
        "op_force_restart": null,
        "op_restart_digest": null,
        "op_status": 0,
        "queue_time": 1,
        "rc_code": 7,
        "transition_key": "14:0:7:81e00128-f587-4846-991e-a49164a8573a",
        "transition_magic": "0:7;14:0:7:81e00128-f587-4846-991e-a49164a8573a"
      }]
    }, {
      "id": "attacking_clones-clone",
      "error_list": [],
      "warning_list": [],
      "class_type": "clone",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "member": {
        "id": "attacking_clones",
        "error_list": [],
        "warning_list": [],
        "class_type": "primitive",
        "status": "blocked",
        "meta_attr": [],
        "parent_id": "attacking_clones-clone",
        "disabled": false,
        "agentname": "ocf::heartbeat:clvm",
        "provider": "heartbeat",
        "type": "clvm",
        "stonith": false,
        "utilization": [],
        "instance_attr": [],
        "class": "ocf",
        "crm_status": [{
          "id": "attacking_clones",
          "resource_agent": "ocf::heartbeat:clvm",
          "managed": true,
          "failed": false,
          "role": "Stopped",
          "active": false,
          "orphaned": false,
          "failure_ignored": false,
          "nodes_running_on": 0,
          "pending": null,
          "node": null
        }, {
          "id": "attacking_clones",
          "resource_agent": "ocf::heartbeat:clvm",
          "managed": true,
          "failed": false,
          "role": "Stopped",
          "active": false,
          "orphaned": false,
          "failure_ignored": false,
          "nodes_running_on": 0,
          "pending": null,
          "node": null
        }],
        "operations": [{
          "call_id": 6,
          "crm_debug_origin": "do_update_resource",
          "crm_feature_set": "3.0.10",
          "exec_time": 54,
          "exit_reason": null,
          "id": "attacking_clones_last_0",
          "interval": 0,
          "last_rc_change": 1498137755,
          "last_run": 1498137755,
          "on_node": "alpha",
          "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
          "operation_key": "attacking_clones_monitor_0",
          "operation": "monitor",
          "op_force_restart": "",
          "op_restart_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
          "op_status": 0,
          "queue_time": 0,
          "rc_code": 7,
          "transition_key": "2:0:7:81e00128-f587-4846-991e-a49164a8573a",
          "transition_magic": "0:7;2:0:7:81e00128-f587-4846-991e-a49164a8573a"
        }]
      }
    }, {
      "id": "comanche-clone",
      "error_list": [],
      "warning_list": [],
      "class_type": "clone",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "member": {
        "id": "comanche",
        "error_list": [],
        "warning_list": [],
        "class_type": "group",
        "status": "blocked",
        "meta_attr": [],
        "parent_id": "comanche-clone",
        "disabled": false,
        "members": [{
          "id": "prva_ip",
          "error_list": [],
          "warning_list": [],
          "class_type": "primitive",
          "status": "blocked",
          "meta_attr": [],
          "parent_id": "comanche",
          "disabled": false,
          "agentname": "ocf::heartbeat:IPaddr2",
          "provider": "heartbeat",
          "type": "IPaddr2",
          "stonith": false,
          "utilization": [],
          "instance_attr": [{
            "id": "prva_ip-instance_attributes-ip",
            "name": "ip",
            "value": "192.168.56.200"
          }],
          "class": "ocf",
          "crm_status": [{
            "id": "prva_ip",
            "resource_agent": "ocf::heartbeat:IPaddr2",
            "managed": true,
            "failed": false,
            "role": "Stopped",
            "active": false,
            "orphaned": false,
            "failure_ignored": false,
            "nodes_running_on": 0,
            "pending": null,
            "node": null
          }, {
            "id": "prva_ip",
            "resource_agent": "ocf::heartbeat:IPaddr2",
            "managed": true,
            "failed": false,
            "role": "Stopped",
            "active": false,
            "orphaned": false,
            "failure_ignored": false,
            "nodes_running_on": 0,
            "pending": null,
            "node": null
          }],
          "operations": [{
            "call_id": 11,
            "crm_debug_origin": "do_update_resource",
            "crm_feature_set": "3.0.10",
            "exec_time": 54,
            "exit_reason": null,
            "id": "prva_ip_last_0",
            "interval": 0,
            "last_rc_change": 1498137755,
            "last_run": 1498137755,
            "on_node": "alpha",
            "op_digest": "11135a7a9104f18beaa85dc6cb2f002f",
            "operation_key": "prva_ip_monitor_0",
            "operation": "monitor",
            "op_force_restart": null,
            "op_restart_digest": null,
            "op_status": 0,
            "queue_time": 0,
            "rc_code": 7,
            "transition_key": "3:0:7:81e00128-f587-4846-991e-a49164a8573a",
            "transition_magic": "0:7;3:0:7:81e00128-f587-4846-991e-a49164a8573a"
          }]
        }, {
          "id": "prvy_indian",
          "error_list": [],
          "warning_list": [],
          "class_type": "primitive",
          "status": "blocked",
          "meta_attr": [],
          "parent_id": "comanche",
          "disabled": false,
          "agentname": "ocf::heartbeat:apache",
          "provider": "heartbeat",
          "type": "apache",
          "stonith": false,
          "utilization": [],
          "instance_attr": [],
          "class": "ocf",
          "crm_status": [{
            "id": "prvy_indian",
            "resource_agent": "ocf::heartbeat:apache",
            "managed": true,
            "failed": false,
            "role": "Stopped",
            "active": false,
            "orphaned": false,
            "failure_ignored": false,
            "nodes_running_on": 0,
            "pending": null,
            "node": null
          }, {
            "id": "prvy_indian",
            "resource_agent": "ocf::heartbeat:apache",
            "managed": true,
            "failed": false,
            "role": "Stopped",
            "active": false,
            "orphaned": false,
            "failure_ignored": false,
            "nodes_running_on": 0,
            "pending": null,
            "node": null
          }],
          "operations": [{
            "call_id": 16,
            "crm_debug_origin": "do_update_resource",
            "crm_feature_set": "3.0.10",
            "exec_time": 33,
            "exit_reason": null,
            "id": "prvy_indian_last_0",
            "interval": 0,
            "last_rc_change": 1498137755,
            "last_run": 1498137755,
            "on_node": "alpha",
            "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
            "operation_key": "prvy_indian_monitor_0",
            "operation": "monitor",
            "op_force_restart": null,
            "op_restart_digest": null,
            "op_status": 0,
            "queue_time": 0,
            "rc_code": 7,
            "transition_key": "4:0:7:81e00128-f587-4846-991e-a49164a8573a",
            "transition_magic": "0:7;4:0:7:81e00128-f587-4846-991e-a49164a8573a"
          }]
        }]
      }
    }, {
      "id": "forest-clone",
      "error_list": [],
      "warning_list": [],
      "class_type": "clone",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "member": {
        "id": "forest",
        "error_list": [],
        "warning_list": [],
        "class_type": "primitive",
        "status": "blocked",
        "meta_attr": [],
        "parent_id": "forest-clone",
        "disabled": false,
        "agentname": "ocf::heartbeat:Dummy",
        "provider": "heartbeat",
        "type": "Dummy",
        "stonith": false,
        "utilization": [],
        "instance_attr": [],
        "class": "ocf",
        "crm_status": [{
          "id": "forest",
          "resource_agent": "ocf::heartbeat:Dummy",
          "managed": true,
          "failed": false,
          "role": "Stopped",
          "active": false,
          "orphaned": false,
          "failure_ignored": false,
          "nodes_running_on": 0,
          "pending": null,
          "node": null
        }, {
          "id": "forest",
          "resource_agent": "ocf::heartbeat:Dummy",
          "managed": true,
          "failed": false,
          "role": "Stopped",
          "active": false,
          "orphaned": false,
          "failure_ignored": false,
          "nodes_running_on": 0,
          "pending": null,
          "node": null
        }],
        "operations": [{
          "call_id": 33,
          "crm_debug_origin": "do_update_resource",
          "crm_feature_set": "3.0.10",
          "exec_time": 10,
          "exit_reason": null,
          "id": "forest_last_0",
          "interval": 0,
          "last_rc_change": 1498137757,
          "last_run": 1498137757,
          "on_node": "alpha",
          "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
          "operation_key": "forest_monitor_0",
          "operation": "monitor",
          "op_force_restart": " state ",
          "op_restart_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
          "op_status": 0,
          "queue_time": 0,
          "rc_code": 7,
          "transition_key": "8:0:7:81e00128-f587-4846-991e-a49164a8573a",
          "transition_magic": "0:7;8:0:7:81e00128-f587-4846-991e-a49164a8573a"
        }]
      }
    }, {
      "id": "dumb1-master",
      "error_list": [],
      "warning_list": [{
        "message": "Resource is master/slave but has not been promoted to master on any node.",
        "type": "no_master"
      }],
      "class_type": "master",
      "status": "blocked",
      "meta_attr": [],
      "parent_id": null,
      "disabled": false,
      "member": {
        "id": "dumb1",
        "error_list": [],
        "warning_list": [],
        "class_type": "primitive",
        "status": "blocked",
        "meta_attr": [],
        "parent_id": "dumb1-master",
        "disabled": false,
        "agentname": "ocf::heartbeat:Dummy",
        "provider": "heartbeat",
        "type": "Dummy",
        "stonith": false,
        "utilization": [],
        "instance_attr": [],
        "class": "ocf",
        "crm_status": [{
          "id": "dumb1",
          "resource_agent": "ocf::heartbeat:Dummy",
          "managed": true,
          "failed": false,
          "role": "Stopped",
          "active": false,
          "orphaned": false,
          "failure_ignored": false,
          "nodes_running_on": 0,
          "pending": null,
          "node": null
        }, {
          "id": "dumb1",
          "resource_agent": "ocf::heartbeat:Dummy",
          "managed": true,
          "failed": false,
          "role": "Stopped",
          "active": false,
          "orphaned": false,
          "failure_ignored": false,
          "nodes_running_on": 0,
          "pending": null,
          "node": null
        }],
        "operations": [{
          "call_id": 46,
          "crm_debug_origin": "do_update_resource",
          "crm_feature_set": "3.0.10",
          "exec_time": 6,
          "exit_reason": null,
          "id": "dumb1_last_0",
          "interval": 0,
          "last_rc_change": 1498137757,
          "last_run": 1498137757,
          "on_node": "alpha",
          "op_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
          "operation_key": "dumb1_monitor_0",
          "operation": "monitor",
          "op_force_restart": " state ",
          "op_restart_digest": "f2317cad3d54cec5d7d7aa7d0bf35cf8",
          "op_status": 0,
          "queue_time": 1,
          "rc_code": 7,
          "transition_key": "11:0:7:81e00128-f587-4846-991e-a49164a8573a",
          "transition_magic": "0:7;11:0:7:81e00128-f587-4846-991e-a49164a8573a"
        }]
      }
    }],
    "available_features": ["sbd", "ticket_constraints"],
    "groups": ["comanche"],
    "constraints": {
      "rsc_colocation": [{
        "id": "pcs_rsc_colocation_set_prvy_indian",
        "score": "INFINITY",
        "sets": [{
          "id": "pcs_rsc_set_prvy_indian",
          "resources": ["prvy_indian"]
        }]
      }, {
        "id": "colocation-attacking_clones-clone-comanche-clone-44",
        "rsc": "attacking_clones-clone",
        "score": "44",
        "with-rsc": "comanche-clone"
      }]
    },
    "cluster_settings": {
      "have-watchdog": "false",
      "dc-version": "1.1.15-1.fc23-e174ec8",
      "cluster-infrastructure": "corosync",
      "cluster-name": "my",
      "pe-warn-series-max": "3000",
      "pe-input-series-max": "2000",
      "batch-limit": "111"
    },
    "need_ring1_address": false,
    "is_cman_with_udpu_transport": false,
    "acls": {
      "role": {},
      "group": {},
      "user": {},
      "target": {}
    },
    "username": "hacluster",
    "fence_levels": {},
    "node_attr": {
      "beta": [{
        "id": "nodes-2-ggg",
        "name": "ggg",
        "value": "gg"
      }, {
        "id": "nodes-2-hugohugo",
        "name": "hugohugo",
        "value": "111"
      }]
    },
    "nodes_utilization": {},
    "known_nodes": ["alpha", "beta"],
    "corosync_online": ["alpha"],
    "corosync_offline": ["beta"],
    "pacemaker_online": ["alpha"],
    "pacemaker_offline": ["beta"],
    "pacemaker_standby": [],
    "status_version": "2"
  }]
}`;